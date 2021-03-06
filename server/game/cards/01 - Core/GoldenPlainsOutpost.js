const StrongholdCard = require('../../strongholdcard.js');

class GoldenPlainsOutpost extends StrongholdCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Move a cavalry character to the conflict',
            cost: ability.costs.bowSelf(),
            condition: () => this.game.currentConflict && this.game.currentConflict.conflictType === 'military',
            target: {
                cardType: 'character',
                cardCondition: card => {
                    return (card.hasTrait('cavalry') &&
                            card.controller === this.controller &&
                            !this.game.currentConflict.isParticipating(card) &&
                            card.allowGameAction('moveToConflict') &&
                            card.location === 'play area');
                }
            },
            handler: context => {
                this.game.addMessage('{0} bows {1} to move {2} into the conflict', this.controller, this, context.target);
                this.game.currentConflict.moveToConflict(context.target,this.game.currentConflict.attackingPlayer === this.controller);
            }
        });
    }
}

GoldenPlainsOutpost.id = 'golden-plains-outpost';

module.exports = GoldenPlainsOutpost;
