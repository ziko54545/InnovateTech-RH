import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportEmployeesToPDF = (employees) => {
    try {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text('InnovateTech RH', 14, 15);

        doc.setFontSize(12);
        doc.text('Liste des Employés', 14, 25);

        doc.setFontSize(10);
        const today = new Date().toLocaleDateString('fr-FR');
        doc.text(`Date: ${today}`, 14, 35);
        doc.text(`Total: ${employees.length} employés`, 14, 40);

        const tableData = employees.map(emp => {
            return [
                emp.matricule || '',
                `${emp.prenom || ''} ${emp.nom || ''}`,
                emp.departement || '',
                emp.poste || '',
                emp.email || ''
            ];
        });

        autoTable(doc, {
            startY: 45,
            head: [['Matricule', 'Nom Complet', 'Département', 'Poste', 'Email']],
            body: tableData,
            styles: {
                fontSize: 9,
                cellPadding: 3
            },
            headStyles: {
                fillColor: [6, 182, 212],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            }
        });

        const filename = `employes_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(filename);

        return true;

    } catch (error) {
        alert(`Erreur PDF: ${error.message}`);
        return false;
    }
};
