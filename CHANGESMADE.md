## Droppe Refactoring Task 2022 - Changes made

This file provides a short run-down on the changes made to the project.

The following list does not necessarily list the changes in the same order as they were made.

- **Reorganizing of the folder-structure**
  - Moved boilerplate React files into utli folder to make main repo less cluttered
  - Changed the names of some of the files into more logical and easy names
- **Split Product and Posts components into separate files**
- **Added typescript type (ProductType) for the data received from the API and made Props interfaces consistent**
  - Makes handling the data a lot easier, faster and safer with the introduction of type-control
- **Refactored every component into functional components with hooks**
  - Creates consistency within the project
  - Hooks are easy and efficient to work with
  - Lots of cleanup also created a cleaner codebase in general
- **Fixed the Title overflow bug mentioned in the code**
  - Changed overflowX to overflowWrap
- **Added unit test for the fetching of t product data and rendering of the product components**
  - Testing the most important part of the application -> the communication with the outside API and generation of data from it

A more detailed insight into the changes can be found in the commits in the git repo.
