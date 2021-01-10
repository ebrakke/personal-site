import * as sapper from '@sapper/app';

import { googleAnalytics } from './ga'

sapper.start({
	target: document.querySelector('#sapper')
});

googleAnalytics("UA-135078640-1");
