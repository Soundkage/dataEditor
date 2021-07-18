import { mount } from '@vue/test-utils';
import store from '../../store/index.js';
import Pagination from '../pagination/pagination.vue';

describe('Pagination Component', () => {
  beforeEach(() => {
    store.state.numberOfPages = 5;
  });
  afterEach(() => {});
  describe('setup', () => {
    it('should setup pagination correct number of pagination items with left and right toggles', () => {
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');

      // should be 7, 5 pages + left and right toggles
      expect(listItems.length).toEqual(7);
    });

    it('should have first item set to active', () => {
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');

      expect(
        listItems[1].classes().indexOf('list__item--active')
      ).toBeGreaterThan(-1);
    });

    it('should not show pagination if only 1 page is available', () => {
      store.state.numberOfPages = 1;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');

      expect(listItems.length).toEqual(0);
    });
  });

  describe('navigateLeft', () => {
    it('should load previous page', async () => {
      store.state.activePage = 2;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');
      await listItems[0].trigger('click');

      expect(listItems[2].classes().indexOf('list__item--active')).toBe(-1);
      expect(
        listItems[1].classes().indexOf('list__item--active')
      ).toBeGreaterThan(-1);
    });

    it('should emit "changePage" event', async () => {
      const wrapper = mount(Pagination);
      store.state.activePage = 2;

      const listItems = wrapper.findAll('li');
      await listItems[0].trigger('click');

      expect(wrapper.emitted()).toHaveProperty('changePage');
    });

    it('should commit SET_ACTIVE_PAGE with value to store', async () => {
      store.state.activePage = 2;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');
      await listItems[0].trigger('click');

      expect(store.state.activePage).toBe(1);
    });
  });

  describe('navigateRight', () => {
    it('should load next page', async () => {
      store.state.activePage = 1;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');
      await listItems[listItems.length - 1].trigger('click');

      expect(listItems[1].classes().indexOf('list__item--active')).toBe(-1);
      expect(
        listItems[2].classes().indexOf('list__item--active')
      ).toBeGreaterThan(-1);
    });

    it('should emit "changePage" event', async () => {
      const wrapper = mount(Pagination);
      store.state.activePage = 1;

      const listItems = wrapper.findAll('li');
      await listItems[listItems.length - 1].trigger('click');

      expect(wrapper.emitted()).toHaveProperty('changePage');
    });

    it('should commit SET_ACTIVE_PAGE with value to store', async () => {
      store.state.activePage = 1;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');
      await listItems[listItems.length - 1].trigger('click');

      expect(store.state.activePage).toBe(2);
    });
  });

  describe('loadPage', () => {
    it('should emit "changePage" event', async () => {
      const wrapper = mount(Pagination);
      store.state.activePage = 1;

      const listItems = wrapper.findAll('li');
      await listItems[4].trigger('click');

      expect(wrapper.emitted()).toHaveProperty('changePage');
    });

    it('should commit SET_ACTIVE_PAGE with value to store', async () => {
      store.state.activePage = 1;
      const wrapper = mount(Pagination);

      const listItems = wrapper.findAll('li');
      await listItems[4].trigger('click');

      expect(store.state.activePage).toBe(4);
    });
  });
});
