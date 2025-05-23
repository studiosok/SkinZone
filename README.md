# SkinZone


TODO: 
- ~~fix bug that doesn't catch ingredient in parens, ie 'Solvent (Propylene Glycol)' is not registered as propylene glycol (allergen)~~
    - ~~also doesn't catch ingredents when followed by parens, ie 'Propylene glycol (57-55-6)'~~
- ~~fix bug to normalize ingredient input to only ingredients separated by comma (separation by semi-colon doesn't work)~~
- error handling
- input validation
    - validate input is long enough
    - validation input needs 'normalization' / replaceAll methods
    - dedupe input
