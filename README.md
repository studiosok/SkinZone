# SkinZone

Detects topical allergens in ingredient lists.

** Due to checking against a static allergen list with only my specific allergens, this will not accurately indicate inclusion of allergens for the general public. ** AKA, this is a helpful tool __for me__. If you'd like to personalize this for different or additional allergens, please fork and update the `allergenList.json` with your individual allergens.

Use:
- Run `yarn dev`

Tests:
** NB: current testing limited due to library config issues. Covered in TODO
- Run `yarn test`

TODO: 
- ~~fix bug that doesn't catch ingredient in parens, ie 'Solvent (Propylene Glycol)' is not registered as propylene glycol (allergen)~~
    - ~~also doesn't catch ingredents when followed by parens, ie 'Propylene glycol (57-55-6)'~~
- ~~fix bug to normalize ingredient input to only ingredients separated by comma (separation by semi-colon doesn't work)~~
- ~~hitting enter does not submit input -> fix~~
- ~~clear input after submit~~
- ~~clear list on new submit~~
- input validation
    - ~~validate input is long enough~~
    - ~~validation input needs 'normalization' / replaceAll methods~~
    - ~~remove periods from end of list~~
    - ~~dedupe input~~
    - ~~remove linebreaks where present~~
- ~~error handling~~
- ~~dedupe possible and found allergen lists~~
- ~~populate full possible text~~
- ~~Two part search - initial search as is; second search more sensitive, flags possible allergens for further (human) review~~
- ~~update disclaimer: no guarantee of accuracy~~
- ~~update liscense~~


- Error handling tests
- Testing framework config for mocks
- unit tests -> config issues with jest and import.meta.dirname
- styling
