// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
