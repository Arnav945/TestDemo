package data.model;

public class ObjectMap {
	public String Name;
	public SelectByType SelectBy;
	public String SelectValue;
	public String Description;
	
	public ObjectMap(String name, SelectByType selectBy, String selectValue)
	{
		Name = name;
		SelectBy = selectBy;
		SelectValue = selectValue;
	}
	
	public ObjectMap(String name, SelectByType selectBy, String selectValue, String description)
	{
		Name = name;
		SelectBy = selectBy;
		SelectValue = selectValue;	
		Description = description;
	}
}
