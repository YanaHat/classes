class User {
    constructor({ id, name, email, address, phone }) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
    }

    edit(obj) {
        Object.assign(this, obj);
    }

    get() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            address: this.address,
            phone: this.phone
        };
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(contactData) {
        this.data.push(new User(contactData));
    }

    edit(id, obj) {
        const user = this.data.find(contact => contact.id === id);
        if (user) user.edit(obj);
    }

    remove(id) {
        this.data = this.data.filter(contact => contact.id !== id);
    }

    get() {
        return this.data.map(contact => contact.get());
    }

    sortBy(field) {
        this.data.sort((a, b) => {
            const A = (a[field] ?? "").toString().toLowerCase();
            const B = (b[field] ?? "").toString().toLowerCase();
            return A > B ? 1 : A < B ? -1 : 0;
        });
    }
}

const contacts = new Contacts();

contacts.add({ id: 3, name: "John", email: "john@mail.com", address: "NY", phone: "12345" });
contacts.add({ id: 1, name: "Anna", email: "anna@mail.com", address: "LA", phone: "99999" });
contacts.add({ id: 2, name: "Bob", email: "bob@mail.com", address: "SF", phone: "55555" });

contacts.sortBy("name");

console.log(contacts.get());
