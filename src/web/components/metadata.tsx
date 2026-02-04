import siteConfig from "../../../website.config.json";

export function Metadata() {
        return (
                <>
                        <title>{siteConfig.name}</title>
                        <meta name="description" content={siteConfig.description} />
                        <meta name="keywords" content={(siteConfig as any).keywords} />

                        {/* Open Graph */}
                        <meta property="og:title" content={siteConfig.name} />
                        <meta property="og:description" content={siteConfig.description} />
                        <meta property="og:image" content={siteConfig.ogImage} />
                        <meta property="og:url" content={siteConfig.url} />
                        <meta property="og:type" content="website" />

                        {/* Twitter */}
                        <meta name="twitter:card" content={siteConfig.twitter.card} />
                        <meta name="twitter:site" content={siteConfig.twitter.site} />
                        <meta name="twitter:title" content={siteConfig.name} />
                        <meta name="twitter:description" content={siteConfig.description} />
                        <meta name="twitter:image" content={siteConfig.ogImage} />

                        {/* Theme */}
                        <meta name="theme-color" content={siteConfig.themeColor} />

                        {/* Fonts */}
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
                </>
        );
}
