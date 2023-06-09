import React from 'react'
import "../App.css"
import { Button,Link  } from '@mui/material';


function intern() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/** Kız arkadaşımın okulda kullanması gereken bazı görselleri site içerisinden ulaşmasını
         * sağlayarak kullanım kolaylığı sağlamak istedim. Günlük hayatta yaşadığımız bir sorunu böylece
         * otomatize ederek erişilebilirliği arttırmayı hedefledim.
         */}
        <p>Kullanacağın fotoğraflara <a href="https://drive.google.com/drive/folders/1KEBTa8WIzyKl5Bl5tSjxlkQpdjMZc29c?usp=share_link" target="_blank" style={{ color: 'white' }}>buradan</a> ulaşabilirsin.</p>
        <Button variant="contained" color="primary">
          <Link href="https://drive.google.com/drive/folders/1KEBTa8WIzyKl5Bl5tSjxlkQpdjMZc29c?usp=share_link" target="_blank" rel="noopener noreferrer" color="inherit">
            Siteye git
          </Link>
        </Button>
      </header>
    </div>
  )
}

export default intern
