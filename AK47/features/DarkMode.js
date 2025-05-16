import config from "../config"

register("renderOverlay", () => {
    if (!config().DarkMode) return
    Renderer.drawRect(Renderer.color(0, 0, 0, config().DarkModeOpacity), 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight())
})