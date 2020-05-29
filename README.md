# Applitools Ultrafast Grid Hackathon (Marie Drake)

My submission on the Applitools Ultrafast Grid Hackathon.

## Technology used

- Cypress for writing the traditional tests
- Allure for the test reports

## Bugs found on Traditional Tests V2

| Bug ID | Description                                                                  | Expected Result                                                                                                            | Actual Result                                                                               |
| ------ | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| 1      | Search Filter not working correctly on V2                                    | When user filters to view black shoes, there should only be 2 images displayed.                                            | 3 images are displayed where one of the shoe's colour is incorrect.                         |
| 2      | Shoe size is displayed incorrectly on V2                                     | Shoe size should say Small as default                                                                                      | Shoe size is displayed as Not Small by default                                              |
| 3      | Filter text and funnel icon should not be displayed on V2 on desktop         | Since the filter feature is already visible by default on desktop, the filter text and funnel icon should not be displayed | Filter text and funnel icon is displayed on V2 on desktop and when clicked, nothing happens |
| 4      | Image teaser icons such as add to favourites or add to cart is missing on V2 | There should be 3 icons per teaser (favourites icon, compare icon and add to basket icon)                                  | No teaser icons displayed                                                                   |

## Notes on test maintenance for Traditional Tests V2

There were some selectors that changed from V1 to V2 so these had to be maintained for some of the tests to pass. Some of the selectors that weren't displayed on some of the viewports on V1 were also now displayed on V2 (I am assuming that these were done on purpose as feature changes).
