const DrawCard = require('../../drawcard.js');

class StewardOfLaw extends DrawCard {
    setupCardAbilities(ability) {
        this.persistentEffect({
            condition: () => this.game.currentConflict && this.game.currentConflict.isParticipating(this),
            match: card => card.getType() === 'character',
            effect: ability.effects.cannotBecomeDishonored()
        });
    }
}

StewardOfLaw.id = 'steward-of-law';

module.exports = StewardOfLaw;
