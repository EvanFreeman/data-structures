import should from 'should';
import Linkedlist from '../build/linkedlist';

describe('linked list tests', () => {
  it('should allow me to add a node', () => {
    const list = new Linkedlist();
    list.add('test');

    (list.head.data).should.equal('test');
    (list.length).should.equal(1);
  });

  it('should have legth of 4', () => {
    const list = new Linkedlist();
    list.add(0);
    list.add(1);
    list.add(2);
    list.add(3);

    (list.length).should.equal(4);
  });

  it('should allow me to remove a node from the head', () => {
    const list = new Linkedlist();
    list.add(0);
    list.add(1);
    (list.length).should.equal(2);

    list.remove(0);
    (list.length).should.equal(1);
  });
});
