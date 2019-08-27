import IconProperties from '../configs//icons';

export default class Calculator {
    constructor(icons) {
        this.icons = icons;
    }

    totalAdditionalPercentage = base => {
        const values = base + this.icons.map(iconName => {
            const property = IconProperties[iconName];
            const percent = property.default + ((1 / (1 - property.loop) - 1) * 0.01);
            return percent >= 1 ? 1 : percent;
        })
        .reduce((p, value) => p + value, 0);
        
        return values >= 1 ? 0.999 : values;
    };

    getDestroyCount = () => {
        return this.icons.filter(iconName => iconName === 'destroy').length;
    };

    destroyPercentage = (base, norma) => {
        if (norma <= this.getDestroyCount()) {
            return 1;
        }
        const prevDestroy = norma > 1 ? this.destroyPercentage(base, norma - 1) : 1;
        return prevDestroy * this.totalAdditionalPercentage(base);
    };
};