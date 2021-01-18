import { shallow } from 'enzyme';
import App from './App';
import ActionPoint from './components/ActionPoint';
describe('Test App', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render ActionPoints', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<ActionPoint />)).toEqual(true);
  });
});
