const LinkedList = function() {
    const Node = function(d) {
        const node = {};
        node.next = null;
        node.data = d;
        return node;
    }
    
    const list = {};
    head = new Node("");
    tail = new Node("");
    head.next = tail;
    sz = 0;
	

    // 첫번째 노드에 삽입한다.
    list.addFirst = function(data) {
        let node = new Node(data);
        node.next = head.next;
        head.next = node;
        sz++;
        return true
    }

    list.addLast = function(data) {
        let node = new Node("");
        tail.data = data;
        tail.next = node;
        tail = node;
        sz++;
        return true
    }

    list.insert = function(idx, data) {
        if(sz < idx) return false;

        let node = new Node(data);
        let tmp = head;
        for(let i=0;;i++) {
            if(i == idx) {
                node.next = tmp.next;
                tmp.next = node;
                sz++;
                return true;
            }            
            tmp = tmp.next;
        }
    }

    // 값에 의한 삭제
    list.remove = function(data) {
        let tmp = head;
        while(true) {
            if(tmp === this.tail) return false;
            if(tmp.next.data === data) {
                tmp.next = tmp.next.next;
                sz--;
                return true;
            }
            tmp = tmp.next;
        }
    }

    list.removeFirst = function() {
        if(list.isEmpty() == true) return false;
        head.next = head.next.next;
        sz--;
        return true;
    }

    // 1~sz
    list.removeIndex = function(idx) {
        if(idx<0 || idx>sz) return false;
        let tmp = head;
        for(let i=1;i<=idx;i++) {            
            if(i==idx) {
                tmp.next = tmp.next.next;
                sz--;
                return true;
            }
            tmp = tmp.next;
            if(tmp == tail)
                return false;
        }

    }
    
    // 검색
    list.find = function(data) {
        let node = head.next;
        while(true) {
            if(node.data === data) return true;
            if(node === this.tail) break;
            node = node.next;
        }
        return false;
    }

    _get = function(idx) {
        if(idx<=0 || idx>sz) return null;
        let tmp = head;
        for(let i=0;i<=idx;i++) {            
            if(i==idx) {
                return tmp;
            }
            tmp = tmp.next;
            if(tmp == tail)
                return null;
        }       
    }

    list.get = function(idx) {
        let node =_get(idx);
        if(node == null) return null;
        return node.data;
    }

    list.set = function(idx,data) {
        let node =_get(idx);
        if(node == null) return false;
        node.data = data;
        return true;
    }

    list.print = function() {
        let node = head.next;
        while(node != tail) {
            console.log(node.data);
            node = node.next;
        }
    }
	
	list.size = function() {
		return sz;
    }
    
	list.isEmpty = function() {
		return sz==0;
    }
	
	return list;
}

// 
list = LinkedList();
for(let i=1;i<=10;i++) list.addLast(i);

list = LinkedList();
for(let i=1;i<=10;i++) list.addFirst(i);


// 중간에 삽입
list.insert(0,100);

list.insert(10,200);

// 검색
list.find(5);

// 값에 의한 삭제
list.remove(6);

// 첫번째 노드 삭제 
list.removeFirst();

// 중간노드삭제 
list.removeIndex(2);

