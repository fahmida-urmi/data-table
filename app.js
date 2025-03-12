function tableData() {
    return {
      search: '',
      data: [
        { id: 1, name: 'John Doe', age: 30, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
        { id: 3, name: 'Sam Green', age: 28, city: 'Chicago' },
        { id: 4, name: 'Chris Johnson', age: 35, city: 'Houston' },
      ],
      sortField: 'name',
      sortDirection: 'asc',
      
      get filteredData() {
        return this.data
          .filter(row => row.name.toLowerCase().includes(this.search.toLowerCase()) || 
                        row.city.toLowerCase().includes(this.search.toLowerCase()))
          .sort((a, b) => {
            const valA = a[this.sortField];
            const valB = b[this.sortField];
            if (this.sortDirection === 'asc') {
              return valA > valB ? 1 : valA < valB ? -1 : 0;
            } else {
              return valA < valB ? 1 : valA > valB ? -1 : 0;
            }
          });
      },

      sort(field) {
        if (this.sortField === field) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortField = field;
          this.sortDirection = 'asc';
        }
      }
    };
  }