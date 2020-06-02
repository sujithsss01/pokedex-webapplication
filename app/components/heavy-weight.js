import Component from '@glimmer/component';

export default class HeavyWeightComponent extends Component {
	
	get weightCheck()
	{
		
		if(this.args.weight<100)
			return true;
		else
			return false;
	}
}
