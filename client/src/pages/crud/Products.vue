<template>
  <q-page>
    <q-table
      ref="table"
      title="Products"
      :data="products"
      :columns="columns"
      row-key="index"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected="selected"
      separator="vertical"
      @selection="onSelection"
    >
      <template #top-right>
        <q-btn
          color="positive"
          icon-right="post_add"
          label="Add Product"
          no-caps
          @click="addProduct"
        />
      </template>
      <template #body-cell-image="props">
        <q-td :props="props">
          <q-img :src="props.row.image"></q-img>
        </q-td>
      </template>
      <template #body-cell-action="props">
        <q-td :props="props">
          <q-btn
            icon="create"
            size="md"
            flat
            dense
            color="primary"
            @click="editProduct(props.row)"
          />
          <q-btn
            icon="delete_sweep"
            size="md"
            class="q-ml-sm"
            flat
            dense
            color="negative"
            @click="deleteProduct(props.row)"
          />
        </q-td>
      </template>
    </q-table>
    <q-dialog ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin q-pa-xl">
        <q-input v-model="formData.title" label="Name" type="text" />
        <q-input v-model="formData.description" label="Description" type="text" />
        <q-input v-model="formData.price" label="Price" type="number" />
        <q-input v-model="formData.amount" label="Amount" type="number" />
        <q-input v-model="formData.image" label="Image" type="text" />
        <q-card-actions align="right">
          <q-btn color="primary" label="OK" @click="onOKClick" />
          <q-btn color="primary" label="Cancel" @click="onCancelClick" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import {
  getProducts, editProduct, deleteProduct, createProduct,
} from '../../services/product.service';

export default {
  name: 'Products',
  data() {
    return {
      selected: [],
      lastIndex: null,
      formData: {
        id: null,
        title: null,
        description: null,
        price: null,
        amount: null,
        image: null,
      },
      products: [],
      columns: [
        {
          name: 'index',
          label: 'No',
          field: 'index',
        },
        {
          name: 'image',
          required: true,
          label: 'Image',
          align: 'left',
          field: 'image',
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'title',
          align: 'center',
          label: 'Title',
          field: 'title',
          sortable: true,
        },
        {
          name: 'description',
          label: 'Description',
          align: 'center',
          field: 'description',
          sortable: true,
        },
        {
          name: 'price',
          label: 'Price',
          field: 'price',
        },
        {
          name: 'amount',
          label: 'Amount',
          field: 'amount',
        },
        {
          name: 'category',
          label: 'Category',
          align: 'center',
          field: 'category',
        },
        {
          name: 'created-at',
          label: 'created at',
          field: 'createdAt',
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
        },
        {
          name: 'action',
          label: 'Action',
          field: 'action',
        },
      ],
    };
  },
  async created() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const { data: products } = await getProducts();
      products.forEach((row, index) => {
        row.index = index;
      });
      this.products = products;
    },
    getSelectedString() {
      return this.selected.length === 0
        ? ''
        : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.products.length}`;
    },

    onSelection({ rows, added, evt }) {
      // eslint-disable-next-line no-void
      if (rows.length === 0 || this.$refs.table === void 0) {
        return;
      }

      const row = rows[0];
      const { filteredSortedRows } = this.$refs.table;
      const rowIndex = filteredSortedRows.indexOf(row);
      const { lastIndex } = this;

      this.lastIndex = rowIndex;
      document.getSelection().removeAllRanges();

      if (this.$q.platform.is.mobile === true) {
        evt = { ctrlKey: true };
      } else if (evt !== Object(evt) || (evt.shiftKey !== true && evt.ctrlKey !== true)) {
        this.selected = added === true ? rows : [];

        return;
      }

      const operateSelection = added === true
        ? (selRow) => {
          const selectedIndex = this.selected.indexOf(selRow);
          if (selectedIndex === -1) {
            this.selected = this.selected.concat(selRow);
          }
        }
        : (selRow) => {
          const selectedIndex = this.selected.indexOf(selRow);
          if (selectedIndex > -1) {
            this.selected = this.selected
              .slice(0, selectedIndex)
              .concat(this.selected.slice(selectedIndex + 1));
          }
        };

      if (lastIndex === null || evt.shiftKey !== true) {
        operateSelection(row);

        return;
      }

      const from = lastIndex < rowIndex ? lastIndex : rowIndex;
      const to = lastIndex < rowIndex ? rowIndex : lastIndex;
      for (let i = from; i <= to; i += 1) {
        operateSelection(filteredSortedRows[i]);
      }
    },

    async addProduct() {
      await createProduct({
        title: 'Xiaomi Redmi 9 Pro',
        description: 'Holati yaxshi atpechatka ishlidi',
        price: 520,
        amount: 21,
        image: 'https://unite4buy.ru/resize/-/600/media/images/2020/06/05/redmi-9-1_Ohu9iLj.jpg',
      });
      await this.fetchProducts();
    },

    editProduct({ _id }) {
      this.$refs.dialog.show();
      this.formData.id = _id;
    },

    async deleteProduct({ _id }) {
      await deleteProduct(_id);
      await this.fetchProducts();
    },

    onDialogHide() {
      this.$refs.dialog.hide();
    },
    async onOKClick() {
      await editProduct(this.formData.id, this.formData);
      await this.fetchProducts();
      this.$refs.dialog.hide();
    },
    onCancelClick() {
      this.$refs.dialog.hide();
    },
  },
};
</script>
