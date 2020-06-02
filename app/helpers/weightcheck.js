import { helper } from '@ember/component/helper';

export default helper(function weightcheck(params) {
	if(params<100)
		return true;
	else
		return false;
 });
