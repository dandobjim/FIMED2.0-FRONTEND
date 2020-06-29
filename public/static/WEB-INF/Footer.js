import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return ( 
		<footer class="footer">
			<div class="container">
				<div class="panel panel-default panel-khaos-footer">
					<div class="panel-body">
						<div class="footer-container">
							Copyright &copy; 2018 <Link href="http://www.uma.es/" target="_blank">University of M&aacute;laga</Link>. All rights reserved. Powered by <Link href="http://khaos.uma.es" target="_blank">Khaos Research</Link>.
						</div>
					</div>
				</div>
			</div>
		</footer>
     );
}
 
export default Footer;