type ThemeName = "@astrolicious/confstellation";
type ThemeConfig = NonNullable<NonNullable<Parameters<typeof import("/Users/alexanderniebuhr/Developer/Projects/astrolicious/confstellation/libs/confstellation/index.ts").default>[0]>["config"]>;

declare namespace AstroThemeProvider {
    export interface Themes {
        "@astrolicious/confstellation": true;
    }

    export interface ThemeConfigs {
        "@astrolicious/confstellation": ThemeConfig;
    }

    export interface ThemePages {
        "@astrolicious/confstellation": ThemeRoutesResolved;
    }

    export interface ThemeOverrides {
        "@astrolicious/confstellation": ThemeExportsResolved;
    }

    export interface ThemeOptions {
        "@astrolicious/confstellation": {
            pages?: {
                [Pattern in keyof ThemeRoutes]?: string | boolean;
            };
            overrides?: {
                [Module in keyof ThemeExports]?: ThemeExports[Module] extends Record<string, any> ? ThemeExports[Module] extends string[] ? string[] : {
                    [Export in keyof ThemeExports[Module]]?: string;
                } : never;
            } & {};
            integrations?: keyof ThemeIntegrationsResolved extends never ? `${ThemeName} is not injecting any integrations` : {
                [Name in keyof ThemeIntegrationsResolved]?: boolean;
            };
        };
    }
}

interface ThemeExports {
    "assets": [];
    "components": [];
    "layouts": [];
    "styles": [];
}

interface ThemeExportsResolved {
    "assets": [];
    "components": [];
    "layouts": [];
    "styles": [];
}

interface ThemeRoutes {
    "/": typeof import("/Users/alexanderniebuhr/Developer/Projects/astrolicious/confstellation/libs/confstellation/src/pages/index.astro").default;
}

interface ThemeRoutesResolved {
    "/": typeof import("/Users/alexanderniebuhr/Developer/Projects/astrolicious/confstellation/libs/confstellation/src/pages/index.astro").default;
}

interface ThemeIntegrations {}
interface ThemeIntegrationsResolved {}

declare module "@astrolicious/confstellation:config" {
    const config: NonNullable<NonNullable<Parameters<typeof import("/Users/alexanderniebuhr/Developer/Projects/astrolicious/confstellation/libs/confstellation/index.ts").default>[0]>["config"]>;
    export default config;
}

declare module "@astrolicious/confstellation:context" {
    export const integrations: Set<string>;
    export const pages: Map<"/", string | false>;
}