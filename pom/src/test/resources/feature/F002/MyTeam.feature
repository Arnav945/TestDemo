
Feature: Create New case without Tracking Number

  Scenario: Successful Login with Valid Credentials
  	Given Testing environment is L2
    When User login to EBS
    And User switches to frame Dashboard
    And User clicks on Dashboard.MyTeams
    And User switches to frame My Teams
    #And User types "423186 US Team" on MyTeams.SearchTeamInput
    #And User clicks on MyTeams.SearchTeamFirstResultAutoComplete
    #And User waits for 10s
    And User clicks on MyTeams.SearchTeamFirstResult
    And User switches to frame _423186_US_Team@fedex
    And User clicks on Team.FirstTeamMemberIcon
   
    
    
    And User waits for 10s
    
    
    