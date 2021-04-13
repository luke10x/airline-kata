Feature: Earning and spending points on flights

  Rules:
  - Travelers can collect 1 point for every $1 they spend on flights
  - 100 points can be redeemed for $10 off a future flights

  Background:
    Given a flight "XX4029" flies from the "LHR" to "JFK" route
    And the current listed fare for the "LHR" to "JFK" is $250.00
  
  Scenario:
    When I am issued a ticket on a flight "XX4029"
    And I pay $250.00 cash for the ticket
    Then the ticket should be completely paid
    And the ticket should be worth 250 loyalty points