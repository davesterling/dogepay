import { computed, reactive } from 'vue';

const layoutConfig = reactive({
    primary: 'slate',
    surface: 'slate',
    darkTheme: true,
    menuMode: 'static',
    menuTheme: 'primary',
    cardStyle: 'transparent'
});

const layoutState = reactive({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    rightMenuVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    searchBarActive: false,
    editBarActive: false,
    sidebarActive: false,
    anchored: false,
    activeMenuItem: null,
    overlaySubmenuActive: false,
    documentMode: 'expanded',
});

export function useLayout() {
    const setActiveMenuItem = (item) => {
        layoutState.activeMenuItem = item.value || item;
    };

    const onMenuToggle = () => {
        if (layoutConfig.menuMode === 'overlay') {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }

        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    const onConfigSidebarToggle = () => {
        if (isSidebarActive.value) {
            layoutState.overlayMenuActive = false;
            layoutState.overlaySubmenuActive = false;
            layoutState.staticMenuMobileActive = false;
            layoutState.menuHoverActive = false;
            layoutState.configSidebarVisible = false;
        }
        layoutState.configSidebarVisible = !layoutState.configSidebarVisible;
    };

    const toggleDocumentMode = () => {
        layoutState.documentMode = layoutState.documentMode === 'expanded' ? 'collapsed' : 'expanded';
    };

    const setDocumentMode = (mode) => {
        layoutState.documentMode = mode;
    };

    const isDarkTheme = computed(() => layoutConfig.darkTheme);
    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive || layoutState.overlaySubmenuActive);
    const isDesktop = computed(() => window.innerWidth > 991);
    const isSlim = computed(() => layoutConfig.menuMode === 'slim');
    const isHorizontal = computed(() => layoutConfig.menuMode === 'horizontal');
    const isOverlay = computed(() => layoutConfig.menuMode === 'overlay');
    const isCompact = computed(() => layoutConfig.menuMode === 'compact');
    const isStatic = computed(() => layoutConfig.menuMode === 'static');
    const isReveal = computed(() => layoutConfig.menuMode === 'reveal');
    const isDrawer = computed(() => layoutConfig.menuMode === 'drawer');
    const isDocumentExpanded = computed(() => layoutState.documentMode === 'expanded');
    const isDocumentCollapsed = computed(() => layoutState.documentMode === 'collapsed');

    return {
        layoutConfig,
        layoutState,
        isDarkTheme,
        setActiveMenuItem,
        onConfigSidebarToggle,
        onMenuToggle,
        toggleDocumentMode,
        setDocumentMode,
        isDocumentExpanded,
        isDocumentCollapsed,
        isSidebarActive,
        isSlim,
        isHorizontal,
        isCompact,
        isOverlay,
        isStatic,
        isReveal,
        isDrawer,
        isDesktop
    };
}
