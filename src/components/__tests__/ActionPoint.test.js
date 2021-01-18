import { shallow, mount } from 'enzyme';
import ActionPoint from '../ActionPoint';
import UserContextProvider from '../../contexts/UserContextProvider';
import { BrowserRouter } from 'react-router-dom';

const linkInternal = { getFrontendUrl: '/myFrontendURL', title: 'My Frontend URL' };
const linkDocument = 'https://www.google.se/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
const linkExternal = 'https://www.google.com';

describe('test class names according to link kind', () => {
  it('should render internal link', () => {
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

  it('should render external link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a external link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={1}
        linkExternal={linkExternal}
        iconKind={0}
      />
    );
    expect(wrapper.find('a').hasClass('external-link')).toBe(true);
  });

  it('should render modal link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a modal link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={2}
        iconKind={1}
      />
    );
    expect(wrapper.find('a').hasClass('modal-link')).toBe(true);
  });

  it('should render document link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a document link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={3}
        iconKind={0}
      />
    );
    expect(wrapper.find('a').hasClass('document-link')).toBe(true);
  });
});

describe('test class names according to icon kind', () => {
  it('should not add anything to class name if iconKind is 0', () => {
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

  it('should contain image in classname if iconKind is 1', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a external link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={1}
        linkExternal={linkExternal}
        iconKind={1}
      />
    );
    expect(wrapper.find('a').hasClass('links__icon--image')).toBe(true);
  });

  it('should render video classname if iconKind is 2', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a modal link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={2}
        iconKind={2}
      />
    );
    expect(wrapper.find('a').hasClass('links__icon--video')).toBe(true);
  });

  it('should render link classname if iconKind is 3', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a document link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={3}
        iconKind={3}
      />
    );
    expect(wrapper.find('a').hasClass('links__icon--link')).toBe(true);
  });

  it('should render document classname if iconKind is 4', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a document link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={3}
        iconKind={4}
      />
    );
    expect(wrapper.find('a').hasClass('links__icon--document')).toBe(true);
  });
});

describe('test UserContext', () => {
  it('should render internal link containing user event', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            iconKind={4}
            linkInternal={linkInternal}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a').at(0).props().href).toBe('/summerburst');
  });

  it('should render username in link text on internal link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a internal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            iconKind={4}
            linkInternal={linkInternal}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a a').text()).toContain('johndoe');
  });
});

describe('test style', () => {
  it('should have styling top and left', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            iconKind={4}
            linkInternal={linkInternal}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    const style = wrapper.find('a a').props().style;
    expect(style).toHaveProperty('left', '10%', 'top', '10%');
  });
});

describe('test link title', () => {
  it('should render correct title in internal link', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a internal link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            iconKind={4}
            linkInternal={linkInternal}
          />
        </BrowserRouter>
      </UserContextProvider>
    );
    expect(wrapper.find('a a').text()).toContain('This is a internal link title');
  });

  it('should render correct title in external link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a external link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={1}
        iconKind={4}
        linkExternal={linkExternal}
      />
    );
    expect(wrapper.find('a').text()).toBe('This is a external link title');
  });

  it('should render correct title in modal link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a modal link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={2}
        iconKind={4}
        linkExternal={linkExternal}
      />
    );
    expect(wrapper.find('a').text()).toBe('This is a modal link title');
  });

  it('should render correct title in document link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a document link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={3}
        iconKind={4}
        linkExternal={linkExternal}
      />
    );
    expect(wrapper.find('a').text()).toBe('This is a document link title');
  });
});

describe('Test misc', () => {
  it('should render null/nothing if no internal link is provided and link kind is 0', () => {
    const wrapper = mount(
      <UserContextProvider>
        <BrowserRouter>
          <ActionPoint
            title="This is a document link title"
            description="This is a description"
            top={10}
            left={10}
            linkKind={0}
            iconKind={4}
          />
        </BrowserRouter>
      </UserContextProvider>
    );

    expect(wrapper.exists('a')).toBe(false);
  });

  it('should render the correct href in document link', () => {
    const wrapper = shallow(
      <ActionPoint
        title="This is a document link title"
        description="This is a description"
        top={10}
        left={10}
        linkKind={3}
        iconKind={4}
        linkDocument={linkDocument}
      />
    );
    expect(wrapper.find('a').props().href).toBe(linkDocument);
  });
});
