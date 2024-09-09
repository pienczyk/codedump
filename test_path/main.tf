# Simple TF code
resource "azurerm_resource_group" "main" {
  name     = var.rg-name
  location = var.location
  tags = var.tags
}

resource "azurerm_cdn_profile" "main" {
  name                = var.cdn_profile_name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Standard_Verizon"
  tags = var.tags
}

resource "azurerm_cdn_endpoint" "main" {
  name                = "main"
  profile_name        = azurerm_cdn_profile.main.name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  origin {
    name      = "main"
    host_name = "www.example.com"
  }
  tags = var.tags
}

# variables
variable "location" {
  type = string
  default = "westeurope"
}

variable "rg-name" {
  type = string
}

variable "tags" {
  type = map(string)
  default = {
    project = "prtest"
  }
}

variable "cdn_profile_name" {
  type = string
}
