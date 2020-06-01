import Component from '@glimmer/component';
import fetch from 'fetch';

export default class HeavyWeightComponent extends Component {
	
	get weightCheck()
	{
		
		if(this.args.weight<100)
			return true;
		else
			return false;
	}
}
