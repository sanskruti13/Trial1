import React from 'react'
import { TestCom } from '../TestCom'

interface  pageProps {
    page: any[],
}

export const HomePage: React.FC<pageProps> = ({ page }) => {
    return (
        <div>
            {page.map((pages: any) => (
                <div key={pages._id}>
                    <h1>{pages.title}</h1>
                    <TestCom testprop={pages.pageBulider} />
                </div>
                ))
            }
      </div>
    )
}
