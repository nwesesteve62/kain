
        function petRegistry() {
            return {
                searchQuery: '',
                selectedType: '',
                selectedStatus: '',
                activeMenu: 'registry', // State for the navigation active indicator
                faqs: [
                    { q: 'Are all pets health-verified?', a: 'Every companion in our registry undergoes a multi-point veterinary exam, including DNA testing for inherited conditions and full vaccination panels.', open: true },
                    { q: 'Can you ship pets internationally?', a: 'Yes, we specialize in luxury logistics through Air Pet International Hub, ensuring climate-controlled, door-to-door delivery worldwide.', open: false },
                    { q: 'What is included in the Pedigree Available status?', a: 'This status confirms the pet is registered with the AKC, UKC, or respective international breed registries with certified 3-generation lineage documents.', open: false }
                ],
                pets: [
                    {
                        id: 1,
                        name: "Maximillian",
                        breed: "Cane Corso",
                        type: "Dog",
                        status: "Sale",
                        age: "4 Months",
                        gender: "Male",
                        location: "Texas Registry",
                        price: "$2,800",
                        isHealthChecked: true,
                        trustBadges: ["Pedigree Available", "Vaccinated", "Microchipped"],
                        description: "An exceptional protector with elite lineage. Highly disciplined and started on basic socialization.",
                        image: "https://images.unsplash.com/photo-1594943015484-9345e5d36e2f?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        id: 2,
                        name: "Cleo",
                        breed: "Maine Coon",
                        type: "Cat",
                        status: "Sale",
                        age: "6 Months",
                        gender: "Female",
                        location: "Florida Registry",
                        price: "$1,500",
                        isHealthChecked: true,
                        trustBadges: ["HCM Screened", "Health Checked"],
                        description: "A gentle giant feline with a magnificent smoke coat and social personality.",
                        image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                        id: 3,
                        name: "Aurora",
                        breed: "Macaw",
                        type: "Bird",
                        status: "Adoption",
                        age: "2 Years",
                        gender: "Female",
                        location: "California Center",
                        price: "Adoptable",
                        isHealthChecked: true,
                        trustBadges: ["Vet Verified", "Socialized"],
                        description: "Vibrant and vocal. Requires an experienced aviary owner. High vocabulary potential.",
                        image: "https://images.unsplash.com/photo-1552728089-57bdde30fc3b?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 4,
                        name: "Thunder",
                        breed: "Friesian Horse",
                        type: "Livestock",
                        status: "Sale",
                        age: "3 Years",
                        gender: "Gelding",
                        location: "Kentucky Ranch",
                        price: "$12,000",
                        isHealthChecked: true,
                        trustBadges: ["Registry Papers", "DNA Certified"],
                        description: "Stunning movement and temperament. Professional training started.",
                        image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 5,
                        name: "Bella",
                        breed: "French Bulldog",
                        type: "Dog",
                        status: "Adoption",
                        age: "1 Year",
                        gender: "Female",
                        location: "NYC Registry",
                        price: "Adoptable",
                        isHealthChecked: true,
                        trustBadges: ["Spayed", "Ready Now"],
                        description: "Sweet personality and loves city living. Excellent with other small pets.",
                        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80"
                    },
                    {
                        id: 6,
                        name: "Mochi",
                        breed: "Llama",
                        type: "Livestock",
                        status: "Sale",
                        age: "1.5 Years",
                        gender: "Female",
                        location: "Colorado Ranch",
                        price: "$3,500",
                        isHealthChecked: true,
                        trustBadges: ["Herd Guard Trained"],
                        description: "Excellent guard animal for hobby farms. Very calm and halter trained.",
                        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
                    }
                ],
                get filteredPets() {
                    return this.pets.filter(pet => {
                        const matchesSearch = pet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                            pet.breed.toLowerCase().includes(this.searchQuery.toLowerCase());
                        const matchesType = this.selectedType === '' || pet.type === this.selectedType;
                        const matchesStatus = this.selectedStatus === '' || pet.status === this.selectedStatus;
                        return matchesSearch && matchesType && matchesStatus;
                    });
                },
                resetFilters() {
                    this.searchQuery = '';
                    this.selectedType = '';
                    this.selectedStatus = '';
                }
            }
        };
        