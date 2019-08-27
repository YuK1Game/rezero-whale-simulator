import IconProperties from '../configs//icons';

export default class Calculator {
    constructor(icons) {
        this.icons = icons;
    }

    totalAdditionalPercentage = base => {
        // 保証分だけ先に計算
        let values = base + this.icons.map(iconName => {
            return IconProperties[iconName].default;
        })
        .reduce((p, value) => p + value, 0);

        // 保証分だけで100%を超えたため確定
        if (values >= 1) return 1;

        values += this.icons.map(iconName => {
            const property = IconProperties[iconName];
            return ((1 / (1 - property.loop) - 1) * 0.01);
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