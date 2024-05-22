Feature: Sign Up with Errors

  Create a new user in the Amazon Cognito UserPool by passing the new user’s email address and password.

  Background:
    Given I'm running the example "ui/components/authenticator/sign-up-with-email"

@angular @react @vue @react-native @gen1 @gen2
Scenario: Sign up with a new email & password with wrong password requirements
  When I type a new "email"
  Then I type an invalid wrong complexity password
  Then I confirm my password
  Then I see "Password must have numbers"
  Then I see "Password must have special characters"
  Then I see "Password must have upper case letters"
  Then I see "Password must have at least 8 characters"

@angular @react @vue @react-native @gen1 @gen2
Scenario: Sign up with a new email & password without lower case characters
  When I type a new "email"
  Then I type an invalid no lower case password
  Then I confirm my password
  Then I see "Password must have numbers"
  Then I see "Password must have special characters"
  Then I see "Password must have lower case letters"
  Then I see "Password must have at least 8 characters"
  Then I confirm "Password must have numbers" error is accessible in password field
