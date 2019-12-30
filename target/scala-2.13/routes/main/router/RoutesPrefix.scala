// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/mafaq/Work/PERSONAL/play-samples-play-java-starter-example/conf/routes
// @DATE:Tue Dec 24 20:06:13 PST 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
