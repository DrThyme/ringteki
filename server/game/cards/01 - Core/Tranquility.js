const DrawCard = require('../../drawcard.js');

class Tranquility extends DrawCard {
    setupCardAbilities() {
        this.action({
            condition: () => this.game.currentConflict,
            handler: () => {
                this.game.addMessage('{0} plays {1} - characters at {2}\'s home are unable to trigger abilities until the end of the conflict', this.controller, this, this.controller.opponent);
                this.controller.opponent.cardsInPlay.each(card => {
                    if(card.type === 'character' && !card.isParticipating()) {
                        card.untilEndOfConflict(ability => ({
                            match: card,
                            effect: ability.effects.cardCannotTriggerAbilities()
                        }));
                    }
                });
            }
        });
    }
}

Tranquility.id = 'tranquility';

module.exports = Tranquility;
