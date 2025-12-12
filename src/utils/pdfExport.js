import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportEmployeesToPDF = (employees) => {
    try {
        console.log('Starting PDF export with', employees.length, 'employees');

        const doc = new jsPDF();

        // Add title
        doc.setFontSize(20);
        doc.text('InnovateTech RH', 14, 15);

        doc.setFontSize(12);
        doc.text('Liste des Employés', 14, 25);

        // Add info
        doc.setFontSize(10);
        const today = new Date().toLocaleDateString('fr-FR');
        doc.text(`Date: ${today}`, 14, 35);
        doc.text(`Total: ${employees.length} employés`, 14, 40);

        // Prepare simple table data
        const tableData = employees.map(emp => {
            return [
                emp.matricule || '',
                `${emp.prenom || ''} ${emp.nom || ''}`,
                emp.departement || '',
                emp.poste || '',
                emp.email || ''
            ];
        });

        console.log('Table data prepared:', tableData.length, 'rows');

        // Add table using imported autoTable
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

        // Save
        const filename = `employes_${new Date().toISOString().split('T')[0]}.pdf`;
        console.log('Saving PDF as:', filename);
        doc.save(filename);

        console.log('PDF exported successfully!');
        return true;

    } catch (error) {
        console.error('PDF Export Error:', error);
        console.error('Error details:', error.message, error.stack);
        alert(`Erreur PDF: ${error.message}`);
        return false;
    }
};
