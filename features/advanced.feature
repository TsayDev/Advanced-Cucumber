Feature: Advanced Cucumber Demo

  Scenario: Loop
    Given I do the following steps 3 times:
      | I eat an apple  |
      | I eat an orange |
      | I eat a banana  |

  Scenario: Condition
    Given I am hungry
    Then I eat the meat if I am hungry   
    Then I eat the following fruits if I am hungry:
      | apple  |
      | orange |
      | banana |
    When I am full
    Then I eat the meat if I am hungry
    Then I eat the following fruits if I am hungry:
      | apple  |
      | orange |
      | banana |    


       