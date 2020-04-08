package data.seeder;
import data.instance.ObjectMaps;
import data.model.SelectByType;

public class ObjectMapSeeder {
	private ObjectMaps objectMaps;
	public ObjectMapSeeder()
	{
		objectMaps = ObjectMaps.getInstance();
	}
	public void seed() {		
		seedHeader();
		seedDashboard();
		seedNewCase();
		seedTeam();
		seedMyTeams();
		seedUserProfile();
		seedUrl();
	}
	private void seedUrl() {
		objectMaps.add("Url.EBS.L1", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
		//objectMaps.add("Url.EBS.L2", SelectByType.Url, "https://testsso.secure.fedex.com/prwebl2upgrade/PRWebEBSSSO");
		objectMaps.add("Url.EBS.L2", SelectByType.Url, "https://mail.google.com/mail/u/0/?tab=wm&ogbl#inbox");
		objectMaps.add("Url.EBS.L3", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
		objectMaps.add("Url.EBS.L4", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
		objectMaps.add("Url.EBS.L5", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
		objectMaps.add("Url.EBS.L6", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
		objectMaps.add("Url.EBS.L7", SelectByType.Url, "http://c0014415.test.cloud.fedex.com:11236/prwebl1upgrade/PRWebLDAP1");
	}
	public void seedDashboard() {		
		objectMaps.add("Dashboard.NewCase", SelectByType.XPath, "//li[@title='New Case']");
		objectMaps.add("Dashboard.MyWork", SelectByType.XPath, "//li[@title='My work']");
		objectMaps.add("Dashboard.MyTeams", SelectByType.XPath, "//li[@title='My Teams']");
		
	}
	public void seedHeader() {
		objectMaps.add("Header.Launch", SelectByType.XPath, "//li[@title='My work']");
	}
	public void seedNewCase() {
		objectMaps.add("NewCase.NoTrackingToggle", SelectByType.XPath, "//label[contains(.,'No Tracking')]");
		objectMaps.add("NewCase.SearchButton", SelectByType.XPath, "//button[@class='CustomButton pzhc pzbutton']");
		objectMaps.add("NewCase.TrackingNumberInput", SelectByType.XPath, "//*[@placeholder='Enter Tracking Number']");
		objectMaps.add("NewCase.IncomingChannelInput", SelectByType.XPath, "//select[@name='$PSearchPage$pIncomingChannel']");
		objectMaps.add("NewCase.MessageOKButton", SelectByType.XPath, "//button[@class='pzhc pzbutton']");
		objectMaps.add("NewCase.ShipperRadio", SelectByType.XPath, "//label[contains(.,'Shipper')]");
		
	}
	
	public void seedTeam() {
		objectMaps.add("Team.FirstTeamMemberIcon", SelectByType.XPath, "(//*[@data-test-id='201806210317550649429'])[1]");
		
		
		
	}
	
	public void seedMyTeams() {
		objectMaps.add("MyTeams.SearchTeamInput", SelectByType.XPath, "//*[@name='$PpyDisplayHarness$pSearchTeamName' and @type='text']");
		objectMaps.add("MyTeams.SearchTeamFirstResultAutoComplete", SelectByType.XPath, "//*[@id='$PD_pyTeamsByApplication$ppxResults$l1']");
		objectMaps.add("MyTeams.SearchTeamFirstResult", SelectByType.XPath, "(//*[@data-test-id='20150806155137096842129'])[1]");
	}
	
	public void seedUserProfile() {
		objectMaps.add("UserProfile.asdas", SelectByType.XPath, "//li[@title='My work']");
	}
}
