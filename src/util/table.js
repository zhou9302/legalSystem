const table = {
  data: function () {
    return {

    }
  },
  methods: {
    tableRowClassName (row) {
      if (row.rowIndex % 2 !== 0) {
        return 'warning-row'
      }
      return ''
    }
  }
}

const multipleTable = {
  data: function () {
    return {
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}

const pagination = {
  data: function () {
    return {
      currentPage: 1,
      pageSize: 10
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.updateList()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.updateList()
    }
  }
}

export { table, multipleTable, pagination }
