Feature: Create New case without Tracking Number

  Scenario Outline: Successful Login with Valid Credentials
  	Given Testing environment is L1
    And User login to EBS
    When User opens New Case
    #And User waits for 3s
    And User types <tracking_no> on NewCase.TrackingNumberInput
    And User clicks on NewCase.SearchButton
    And User clicks on NewCase.MessageOKButton
    And User clicks on NewCase.ShipperRadio
    And User selects "Email" on NewCase.IncomingChannelInput
    
    And User types "First name" on NewCase.FirstNameInput
    And User types "Last name" on NewCase.LastNameInput
    And User types "123-456-7890" on NewCase.PhoneNumberInput
    And User selects "Clearance" on Newcase.CaseTypeDropdown
    And User selects "CPW" on Newcase.SubCategoryDropdown
    And User clicks on NewCase.CaseNotes
    
    
    
    Examples:
    	|tracking_no|
    	|"794952837806"|
    
    