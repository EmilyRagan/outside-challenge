# Running the Script
1. `npm install`
1. `npm run play <elevator start> <comma separated floors to visit>`

Provided example would be as such: `npm run play 12 2,9,1,32`

Tests can be run using the test script `npm run test`

# Assumptions
1. There are only numbered floors (no G, M, L, etc)
1. All valid floors are whole numbers
1. All whole numbers are valid floors (no skipping 13)
1. All consecutive floors are the same distance apart
1. Time between consecutive floors is consistent, regardless of how many or few floors are traveled (elevator does not speed up during longer trips)
1. Single floor travel time: 10 (Provided)
1. It takes no time to stay on the same floor (the same floor multiple times in a row will not add to the travel time)
1. Time spent stopped on a floor is not included in total travel time, as this is not time while traveling