import React from 'react'

interface  pageProps {
    page: any,
}

export const HomePage: React.FC<pageProps> = ({ page }) => {
    return (
        <div>
            {
                page.map((pages: any) => (
                    <div>
                        <h1>{page.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}
