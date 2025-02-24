// Get all users
export const getUsers = async (req, res) => {
    try {
      const [users] = await global.db.execute("SELECT * FROM users ORDER BY id ASC");
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users", error });
    }
  };
  
  // Create a new user
  export const createUser = async (req, res) => {
    const { name, email, contact_number } = req.body;
    try {
      await global.db.execute("INSERT INTO users (name, email, contact_number) VALUES (?, ?, ?)", 
        [name, email, contact_number]
      );
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  };
  
  // Delete a user
  export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const [result] = await global.db.execute("DELETE FROM users WHERE id = ?", [id]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  };
  