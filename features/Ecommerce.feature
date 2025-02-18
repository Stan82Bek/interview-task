@SMOKE
Feature: E-commerce functionality

     
     @validLogin
     Scenario: Successful login with valid credentials
     When I enter username "valid username"
     And I enter password "valid password"
     And I click the login button
     Then I should be logged in successfully

     @productPurchaseFlow
     Scenario: Successful checkout 
     When I enter username "valid username"
     And I enter password "valid password"
     And I click the login button
     Then I should be logged in successfully
      Then I need select 3 random products 
     And I need to add selected products to shoping cart
     Then I need to checkout the products
     Then I need to provide my credentials and click continue button 
     When I need to verify selected products ready to checkout
     Then I need to click finish button and verify thank you message

      @cartPersistenceTest
     Scenario: Successful checkout with refresh and navigate back and forward the page
     When I enter username "valid username"
     And I enter password "valid password"
     And I click the login button
     Then I should be logged in successfully
      Then I need select 3 random products 
     And I need to add selected products to shoping cart
     Then I refresh the page 
     And I navigate away and back the page 
     When I need to verify selected products ready to checkout
     Then I need to click finish button and verify thank you message


     @lockedUser   
     Scenario: Verify users can login with locked usern
     When I enter username "locked"
     And I enter password "valid password"
     And I click the login button
     Then I need to verify error message "Epic sadface: Sorry, this user has been locked out."

     @otherUserName   
     Scenario: Verify users can login with other user
     When I enter username "other usernames"
     And I enter password "valid password"
     And I click the login button
     Then I need to verify error message "Epic sadface: Username and password do not match any user in this service"

   
     @invalidPassword 
     Scenario: Verify users can login with invalid password
     When I enter username "valid username"
     And I enter password "invalid"
     And I click the login button
     Then I need to verify error message "Epic sadface: Password is required"

   
