export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-MA', {
        style: 'currency',
        currency: 'MAD',
        minimumFractionDigits: 0,
    }).format(amount);
};

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const calculateSeniority = (dateEmbauche) => {
    const start = new Date(dateEmbauche);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

    return `${diffYears} ans et ${diffMonths} mois`;
};

export const generateMatricule = () => {
    return `EMP${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
};
