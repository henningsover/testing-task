import { shallow, mount } from 'enzyme';
import ActionPoint from '../ActionPoint';
import UserContextProvider from '../../contexts/UserContextProvider';
import { BrowserRouter } from 'react-router-dom';

const linkInternal = { getFrontendUrl: '/myFrontendURL', title: 'My Frontend URL' };
const linkDocument = 'https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
const linkExternal = 'https://www.google.com';

describe('test class names according to link kind', () => {
  it('renders internal link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a internal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            linkInternal={linkInternal}
            iconKind={0}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a a').hasClass('internal-link')).toBe(true);
  });

  it('renders external link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a external link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={1}
            linkExternal={linkExternal}
            iconKind={0}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('external-link')).toBe(true);
  });

  it('renders modal link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a modal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={2}
            iconKind={0}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('modal-link')).toBe(true);
  });

  it('renders document link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={3}
            iconKind={0}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('document-link')).toBe(true);
  });
});

describe('test class names according to icon kind', () => {
  it('renders no icon if iconKind = 0', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a internal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            linkInternal={linkInternal}
            iconKind={0}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a a').hasClass('links__icon--')).toBe(true);
  });

  it('renders image classname if iconKind is 1', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a external link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={1}
            linkExternal={linkExternal}
            iconKind={1}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('links__icon--image')).toBe(true);
  });

  it('renders video classname if iconKind is 2', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a modal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={2}
            iconKind={2}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('links__icon--video')).toBe(true);
  });

  it('renders link classname if iconKind is 3', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={3}
            iconKind={3}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('links__icon--link')).toBe(true);
  });

  it('renders document classname if iconKind is 4', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={3}
            iconKind={4}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').hasClass('links__icon--document')).toBe(true);
  });
});
