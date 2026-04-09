// ========================================
// MODULE D'EXPORT PDF
// Utilise jsPDF et html2canvas pour générer des PDFs
// ========================================

/**
 * Classe pour gérer les exports PDF
 */
class PDFExporter {
  constructor() {
    this.jsPDFLoaded = false;
    this.html2canvasLoaded = false;
  }

  /**
   * Charge les bibliothèques nécessaires
   */
  async chargerBibliotheques() {
    if (this.jsPDFLoaded && this.html2canvasLoaded) {
      return true;
    }

    return new Promise((resolve, reject) => {
      // Charger jsPDF
      const scriptJsPDF = document.createElement('script');
      scriptJsPDF.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      scriptJsPDF.onload = () => {
        this.jsPDFLoaded = true;
        
        // Charger html2canvas
        const scriptHtml2Canvas = document.createElement('script');
        scriptHtml2Canvas.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        scriptHtml2Canvas.onload = () => {
          this.html2canvasLoaded = true;
          resolve(true);
        };
        scriptHtml2Canvas.onerror = () => reject(new Error('Erreur chargement html2canvas'));
        document.head.appendChild(scriptHtml2Canvas);
      };
      scriptJsPDF.onerror = () => reject(new Error('Erreur chargement jsPDF'));
      document.head.appendChild(scriptJsPDF);
    });
  }

  /**
   * Exporte un élément HTML en PDF
   * @param {HTMLElement|string} element - Élément DOM ou sélecteur CSS
   * @param {Object} options - Options d'export
   */
  async exporterHTML(element, options = {}) {
    try {
      // Charger les bibliothèques si nécessaire
      await this.chargerBibliotheques();

      // Récupérer l'élément
      const el = typeof element === 'string' ? document.querySelector(element) : element;
      if (!el) {
        throw new Error('Élément non trouvé');
      }

      // Options par défaut
      const opts = {
        nomFichier: options.nomFichier || 'document.pdf',
        orientation: options.orientation || 'portrait', // 'portrait' ou 'landscape'
        format: options.format || 'a4',
        marges: options.marges || 10,
        qualite: options.qualite || 2,
        ...options
      };

      // Afficher un loader
      this.afficherLoader('Génération du PDF en cours...');

      // Cloner l'élément pour le modifier sans affecter l'original
      const clone = el.cloneNode(true);
      
      // Appliquer des styles pour l'impression
      clone.style.width = '210mm'; // A4 width
      clone.style.padding = '10mm';
      clone.style.backgroundColor = 'white';
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);

      // Convertir en canvas
      const canvas = await html2canvas(clone, {
        scale: opts.qualite,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      // Supprimer le clone
      document.body.removeChild(clone);

      // Créer le PDF
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: opts.orientation,
        unit: 'mm',
        format: opts.format
      });

      // Calculer les dimensions
      const imgWidth = opts.orientation === 'portrait' ? 210 : 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = opts.orientation === 'portrait' ? 297 : 210;

      let heightLeft = imgHeight;
      let position = 0;

      // Ajouter l'image au PDF
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Ajouter des pages supplémentaires si nécessaire
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Sauvegarder le PDF
      pdf.save(opts.nomFichier);

      this.masquerLoader();
      this.afficherNotification('✅ PDF généré avec succès !', 'success');

      return true;
    } catch (error) {
      console.error('Erreur export PDF:', error);
      this.masquerLoader();
      this.afficherNotification('❌ Erreur lors de la génération du PDF', 'error');
      return false;
    }
  }

  /**
   * Exporte du contenu texte en PDF
   * @param {string} titre - Titre du document
   * @param {string} contenu - Contenu du document
   * @param {Object} options - Options
   */
  async exporterTexte(titre, contenu, options = {}) {
    try {
      await this.chargerBibliotheques();

      const opts = {
        nomFichier: options.nomFichier || 'document.pdf',
        orientation: options.orientation || 'portrait',
        format: options.format || 'a4',
        ...options
      };

      this.afficherLoader('Génération du PDF en cours...');

      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({
        orientation: opts.orientation,
        unit: 'mm',
        format: opts.format
      });

      // Ajouter le titre
      pdf.setFontSize(18);
      pdf.setFont(undefined, 'bold');
      pdf.text(titre, 20, 20);

      // Ajouter le contenu
      pdf.setFontSize(12);
      pdf.setFont(undefined, 'normal');
      
      const lignes = pdf.splitTextToSize(contenu, 170);
      pdf.text(lignes, 20, 35);

      pdf.save(opts.nomFichier);

      this.masquerLoader();
      this.afficherNotification('✅ PDF généré avec succès !', 'success');

      return true;
    } catch (error) {
      console.error('Erreur export PDF:', error);
      this.masquerLoader();
      this.afficherNotification('❌ Erreur lors de la génération du PDF', 'error');
      return false;
    }
  }

  /**
   * Affiche un loader pendant la génération
   */
  afficherLoader(message = 'Chargement...') {
    let loader = document.getElementById('pdf-loader');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'pdf-loader';
      loader.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 99999; display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <div style="background: white; padding: 40px; border-radius: 20px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            <div style="width: 50px; height: 50px; border: 5px solid #667eea; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <p style="font-size: 1.2rem; font-weight: 700; color: #667eea; margin: 0;">${message}</p>
          </div>
        </div>
        <style>
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        </style>
      `;
      document.body.appendChild(loader);
    }
  }

  /**
   * Masque le loader
   */
  masquerLoader() {
    const loader = document.getElementById('pdf-loader');
    if (loader) {
      loader.remove();
    }
  }

  /**
   * Affiche une notification
   */
  afficherNotification(message, type = 'info') {
    const couleurs = {
      success: '#27ae60',
      error: '#e74c3c',
      info: '#667eea'
    };

    const notif = document.createElement('div');
    notif.innerHTML = `
      <div style="position: fixed; top: 20px; right: 20px; background: ${couleurs[type]}; color: white; padding: 20px 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 100000; font-weight: 700; font-size: 1.1rem; animation: slideIn 0.3s ease;">
        ${message}
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      </style>
    `;
    document.body.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 3000);
  }
}

// Créer une instance globale
window.PDFExporter = new PDFExporter();

// Fonction helper pour export rapide
window.exporterEnPDF = async (element, nomFichier, options = {}) => {
  return await window.PDFExporter.exporterHTML(element, { nomFichier, ...options });
};

console.log('✅ PDFExporter chargé et prêt');
