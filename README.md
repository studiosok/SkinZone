# SkinZone


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


- Error handling tests
- Testing framework config for mocks
- unit tests -> config issues with jest and import.meta.dirname
- update liscense
- styling
