let user = require("../collection/User");
let b = require("bcrypt");

let user_function = {
  register: async function (req, res) {
    try {
      let {
        name,
        email,
        password,
        gender,
        age,
        contact,
        height,
        weight,
        bmi_index,
        target_weight,
        bp,
        diabities
      } = req.body;

      let email_check = await user.findOne({ email: email });
      if (email_check) {
        return res.status(409).json({ msg: "Email Already exist" });
      } else {
        let enc_pswd = b.hashSync(password, 15);

        let user_data = new user({
          name,
          email,
          password: enc_pswd,
          gender,
          age,
          contact,
          height,
          weight,
          bmi_index,
          target_weight,
          bp,
          diabities
        });

        let save_data = await user_data.save();
        return res.status(200).json({ msg: "User registered successfully" });
      }
    } catch (error) {
      return res.status(501).json({ msg: error.message });
    }
  },

  get_all_user: async function (req, res) {
    try {
      let user_record = await user.find().select("-password").sort({ record_at: -1 });
      return res.status(200).json(user_record);
    } catch (error) {
      return res.status(501).json({ msg: error.message });
    }
  },

  delete_user: async function (req, res) {
    try {
      let { id } = req.params;
      let find_id = await user.findById(id);
      if (find_id) {
        await user.findByIdAndDelete(find_id);
        return res.status(200).json({ msg: "User Deleted Successfully" });
      }
    } catch (error) {
      return res.status(501).json({ msg: error.message });
    }
  },

  update_record: async function (req, res) {
    try {
      let { id } = req.params;
      let {
        name,
        email,
        age,
        gender,
        contact,
        height,
        weight,
        bmi_index,
        target_weight,
        bp,
        diabities
      } = req.body;

      let id_exist = await user.findById(id);
      if (id_exist) {
        let update_data = {
          name,
          email,
          age,
          gender,
          contact,
          height,
          weight,
          bmi_index,
          target_weight,
          bp,
          diabities
        };

        await user.findByIdAndUpdate(id, update_data);
        return res.status(200).json({ msg: "User updated successfully" });
      }
    } catch (error) {
      return res.status(501).json({ msg: error.message });
    }
  },
  login: async function (req, res) {
    try {
      let { email, password } = req.body;

      let user_data = await user.findOne({ email: email });
      if (!user_data) {
        return res.status(401).json({ msg: "Invalid Email or Password" });
      }

      let isMatch = await b.compare(password, user_data.password);
      if (!isMatch) {
        return res.status(401).json({ msg: "Invalid Email or Password" });
      }

      let { password: _, ...userWithoutPassword } = user_data.toObject();
      return res.status(200).json({ msg: "Login Successful", user: userWithoutPassword });

    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

};

module.exports = user_function;
