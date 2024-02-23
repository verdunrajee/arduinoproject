 static {
    String extenalPackageIndexUrl = System.getProperty("PACKAGE_INDEX_URL");
    if (extenalPackageIndexUrl != null && !"".equals(extenalPackageIndexUrl)) {
      PACKAGE_INDEX_URL = extenalPackageIndexUrl;
    } else {
      PACKAGE_INDEX_URL = "https://downloads.arduino.cc/packages/package_index.json";
    }

    String externalLibraryIndexUrl = System.getProperty("LIBRARY_INDEX_URL");
    if (externalLibraryIndexUrl != null && !externalLibraryIndexUrl.isEmpty()) {
      LIBRARY_INDEX_URL = externalLibraryIndexUrl;
      String externalLibraryIndexUrlGz = System.getProperty("LIBRARY_INDEX_URL_GZ");
      if (externalLibraryIndexUrlGz != null && !externalLibraryIndexUrlGz.isEmpty()) {
        LIBRARY_INDEX_URL_GZ = externalLibraryIndexUrlGz;
      } else {
        LIBRARY_INDEX_URL_GZ = "";
      }
//add more later here
   public class LoadVIDPIDSpecificPreferences {

  public void load(PreferencesMap prefs) {
    BoardPort boardPort = BaseNoGui.getDiscoveryManager().find(PreferencesData.get("serial.port"));
    if (boardPort == null) {
      return;
    }

    String vid = boardPort.getPrefs().get("vid");
    String pid = boardPort.getPrefs().get("pid");
    if (StringUtils.isEmpty(vid) || StringUtils.isEmpty(pid)) {
      return;
    }

    int VIDPIDIndex = findVIDPIDIndex(prefs, vid.toUpperCase(), pid.toUpperCase());
    if (VIDPIDIndex < 0) {
      return;
    }
   //fill that in 
  private int findVIDPIDIndex(PreferencesMap preferences, String vid, String pid) {
    Optional<Integer> vidPid = preferences.subTree("vid").entrySet().stream()
      .filter(keyValue -> !keyValue.getKey().contains("."))
      .filter(keyValue -> vid.equals(keyValue.getValue().toUpperCase()) && pid.equals(preferences.get("pid." + keyValue.getKey()).toUpperCase()))
      .map(Map.Entry::getKey)
      .map(Integer::valueOf)
      .findFirst();
