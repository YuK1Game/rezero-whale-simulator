import { White, Blue, Yellow, Green, Red, Special, Destroy } from '../atomics/components/atoms/battleIcons';

export default {
    white   : { default : 0.01, loop : 0.33, component : White },
    blue    : { default : 0.06, loop : 0.50, component : Blue },
    yellow  : { default : 0.06, loop : 0.66, component : Yellow },
    green   : { default : 0.06, loop : 0.86, component : Green },
    red     : { default : 0.06, loop : 0.95, component : Red },
    special : { default : 0.06, loop : 0.99, component : Special },
    destroy : { default : 0.00, loop : 0.00, component : Destroy },
}